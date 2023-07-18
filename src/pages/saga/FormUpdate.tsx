import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { UpdateRegionReq } from '@/redux-saga/action/regionAction';
import { Dispatch } from 'redux';

interface Props {
  update: { region: any; };
  setUpdate: any;
  setRefresh: (value: boolean) => void;
}

export default function FormUpdate(props: Props) {
  const dispatch: Dispatch<any> = useDispatch();
  const { region } = props.update;
  const formik = useFormik({
    initialValues: {
      name: region.regionName,
    },
    onSubmit: async (values: any) => {
      let payload = {
        name: values.name
      };
      dispatch(UpdateRegionReq({id: region.regionId, payload}));
      props.setUpdate({ ...props.update, open: false });
      window.alert('Data successfully updated');
      props.setRefresh(true);
    },
  });

  return (
    <div>
      <h2>Update</h2>
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          className="text-black"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <div>
          <button type="submit" onClick={formik.handleSubmit}>
            Simpan
          </button>
          <button type="button" onClick={() => props.setUpdate({ ...props.update, open: false })}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
