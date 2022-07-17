import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Genre, Song } from "../model/Song";
import { getSongByIdApi } from "../api/songs.api";
import MenuItem from '@mui/material/MenuItem';
import {Select,Box} from '@mui/material';
import BackButton from "../components/BackButton";



// const validationSchema = yup.object({
//   artist: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   title: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });
function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        // backgroundColor: (theme) =>
        //   theme.palette.mode === 'light'
        //     ? 'rgba(255, 0, 0, 0.1)'
        //     : 'rgb(255 132 132 / 25%)',
      }}
    />
  );
}

const EditSong = (props:{updateSong:Function} ) => {
  const { songId } = useParams();
  let [song, setSong] = useState({id:"",title: "",artist: "",price: 0,length: 0,genre:0});

  useEffect(() => {
    async function f() {
      setSong((await getSongByIdApi(songId|| "")).data);
    }
    f();
  }, []);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: song,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      props.updateSong(formik.values);
      
    },
  });

  return (
    <>
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "35ch",
          marginLeft: 80,
          marginTop: 10,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            type="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <RedBar />
          <TextField
            fullWidth
            id="artist"
            name="artist"
            label="Artist"
            value={formik.values.artist}
            onChange={formik.handleChange}
            error={formik.touched.artist && Boolean(formik.errors.artist)}
            helperText={formik.touched.artist && formik.errors.artist}
          />
          <RedBar />
          <Select
            fullWidth
            id="genre"
            name="genre"
            label="Genre"
            value={formik.values.genre}
            onChange={formik.handleChange}
          >
            {Object.values(Genre).map(
              (x) =>
                typeof x === "string" && (
                  <MenuItem key={x} value={x}>
                    {x}
                  </MenuItem>
                )
            )}
          </Select>
          <RedBar />
          <TextField
            fullWidth
            id="length"
            name="length"
            label="Length"
            value={formik.values.length}
            onChange={formik.handleChange}
            error={formik.touched.artist && Boolean(formik.errors.length)}
            helperText={formik.touched.artist && formik.errors.length}
          />
          <RedBar />
          <TextField
            fullWidth
            id="price"
            name="price"
            label="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.artist && Boolean(formik.errors.price)}
            helperText={formik.touched.artist && formik.errors.price}
          />
          <RedBar />
          <Button color="primary" variant="contained" fullWidth type="submit">
           עדכן
          </Button>
          <RedBar />
        </form>
      </Box>
      <BackButton navigateTo="songs" />
    </>
  );
};
export default EditSong;
