import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { CreateRegionReq } from '@/redux-saga/action/regionAction';
import { Dispatch } from 'redux';

interface Props {
  setDisplay: (value: boolean) => void;
  setRefresh: (value: boolean) => void;
}

export default function FormCreate(props: Props) {
  const dispatch: Dispatch<any> = useDispatch();
  const [previewImg, setPreviewImg] = useState<string | undefined>();
  const [upload, setUpload] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      file: undefined,
    },
    onSubmit: async (values: any) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("file", values.file);
      dispatch(CreateRegionReq(payload));
      props.setDisplay(false);
      window.alert('Data successfully inserted');
      props.setRefresh(true);
    },
  });

  const uploadConfig = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    const file = event.target.files?.[0];
    if (file) {
      reader.onload = () => {
        formik.setFieldValue('file', file);
        setPreviewImg(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUpload(true);
    }
  };

  const onClear = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    setPreviewImg(undefined);
    setUpload(false);
  };

  return (
    <div>
      <h2>Create</h2>
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          className="text-black border-gray-400 border-2 rounded-md mx-2 px-2"
          placeholder='Region name'
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Photo</label>
        <div>
          {!upload ? (
            <>
              <span>Kosong</span>
            </>
          ) : (
            <>
              <img src={previewImg} alt="img" />
              <button className='rounded-md bg-red-600 text-white w-24 my-2 mx-1' onClick={onClear}>Remove</button>
            </>
          )}
        </div>
        <div>
          <label>
            <span>Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="text-black border-gray-400 border-2 rounded-md mx-2 px-2"
              onChange={uploadConfig()}
            />
          </label>
        </div>
        <div>
          <button className='rounded-md bg-green-600 text-white w-24 my-2 mx-1' type="submit" onClick={formik.handleSubmit}>
            Simpan
          </button>
          <button className='rounded-md bg-red-600 text-white w-24 my-2 mx-1' type="button" onClick={() => props.setDisplay(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
