import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Category} from "../types/accreditation";
import {getAccreditation} from "../API/acccreditation";
import {RoutesName} from "../routes";
import {useForm} from "react-hook-form";

export const useSendForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const [categories, setCategories] = useState<Category[]>([] as Category[]);
  const categoriesRef = useRef<Category[]>()
  categoriesRef.current = categories

  const [category, setCategory] = useState<string>(
      categories.length ? categories[0].categoryName : ""
  );
  const categoryRef = useRef<string>()
  categoryRef.current = category

  const [currentCategoryDesc, setCurrentCategoryDesc] = useState<string | undefined>(categories.length ? categories[0].categoryDescription : "");

  const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setCurrentCategoryDesc(check(e.target.value));
  };

  const check = (option: string) => {
    if (categoriesRef && categoriesRef.current) {
      const currentCategory = categoriesRef.current.find((cat) => cat.categoryName + " - категория" === option)
      if (currentCategory && currentCategory.categoryDescription) {
        return currentCategory.categoryDescription;
      }
    }
  };

  const onClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      navigate(RoutesName.MAIN);
    }
  };

  useEffect(() => {
    getAccreditation().then((data) => {
      const categories = data.map((item) => item);
      setCategories(categories);
      setCurrentCategoryDesc(categories[0].categoryDescription);
      setCategory(categories[0].categoryName)
    });
  }, []);

  return {
    onChangeCategory,
    currentCategoryDesc,
    category: categoryRef.current,
    categories: categories,
    onClickOverlay,
    overlayRef,
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
  };
};
