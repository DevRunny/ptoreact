import React, {useState} from 'react';
import style from "./FilePicker.module.css"
import {adminPanelImages} from "../../../../../../utils/adminPanelRoutesImages";

interface IFilePicker {
  id: string
}

const FilePicker: React.FC<IFilePicker> = ({id}) => {
  const [file, setFile] = useState<string>("")

  const onChangeFile = (e: any) => {
    setFile(e.target.files[0].name)
  }

  return (
      <div className={style.filePicker}>
        {
          file
              ?
              <input disabled={true} type="text" value={file} className={style.fileName} />
              :
              <></>
        }
        <label htmlFor={`filePicker${id}`} className={style.labelPicker}>
          <div className={style.filePickerImage}>
            <img className={style.uploadIcon} src={adminPanelImages.upload.src} alt={adminPanelImages.upload.alt} />
          </div>
          <div className={style.filePickerText}>Выберите файл</div>
        </label>
        <input type="file" id={`filePicker${id}`} className={style.picker} onChange={(e) => {
          onChangeFile(e)
        }} />
      </div>
  );
};

export default FilePicker;
