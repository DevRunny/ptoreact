import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Category} from "../types/accreditation";
import {getSelectedCategories} from "../API/acccreditation";
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


  const getNearTime = (): string => {
    const today = new Date()
    let hours = today.getHours()
    const minutes = today.getMinutes()
    if (minutes > 30) {
      hours++
    }
    return `${hours}:00`
  }

  const getSelectedDate = (): string => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()
    const day = selectedDate.getDate()
    return `${day < 10 ? 0 : ""}${day}.${month < 10 ? 0 : ""}${month + 1}.${year}`
  }

  const toggleVisibleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen)
  }

  const toggleVisibleTimePicker = () => {
    setIsTimePickerOpen(!isTimePickerOpen)
  }

  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>(getNearTime())
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false)
  const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false)

  const changeDate = (date: Date) => {
    setSelectedDate(date)
    toggleVisibleDatePicker()
  }

  const changeTime = (time: string) => {
    setSelectedTime(time)
    toggleVisibleTimePicker()
  }

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
    getSelectedCategories().then((data) => {
      const categories = data.sort((a, b) => Number(a.id) - Number(b.id)).map((item) => item);
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
    selectedDate,
    getSelectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    isDatePickerOpen,
    isTimePickerOpen,
    toggleVisibleDatePicker,
    toggleVisibleTimePicker,
    changeDate,
    changeTime
  };
};
