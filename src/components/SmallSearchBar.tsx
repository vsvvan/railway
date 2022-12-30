import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import './SearchBar.css';
import { ConInfo } from '../types';
import cities from '../mock-data/cities.json';
import { RootState } from '../store/store';
import { setSearchInfo } from '../store/searchInfoReducer';
import { useSelector, useDispatch } from 'react-redux';

type SearchBarProps = {
  //dispatch: React.Dispatch<React.SetStateAction<ConInfo>>;
};

export const SmallSearchBar = (props: SearchBarProps) => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));

  const handleChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  const navigate = useNavigate();
  const navigateToInfo = () => {
    navigate('/connections');
  };
  // const DefVals = () => {
  //   const curD = new Date();
  //   const defVal: ConInfo = {
  //     from: '',
  //     to: '',
  //     day: curD.getDate(),
  //     month: curD.getMonth() + 1,
  //     hour: curD.getHours(),
  //     minute: curD.getMinutes(),
  //   };
  //   return defVal;
  // };
  const formVals = useSelector((state: RootState) => state.searchInfo);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ConInfo>({ defaultValues: formVals });

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<ConInfo> = (data) => {
    dispatch(setSearchInfo(data));
    // props.dispatch({
    //   from: data.from,
    //   to: data.to,
    //   month: data.month,
    //   day: data.day,
    //   hour: data.hour,
    //   minute: data.minute,
    // });
  };
  const SwapDestinations = () => {
    const tmp = getValues('to');
    setValue('to', getValues('from'));
    setValue('from', tmp);
  };

  return (
    <div className="SearchContainer">
      <div className="SearchBar">
        <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
          <Grid container spacing={0.5}>
            <Grid item xs={12}>
              <h1 className="searchTitle">Connection search</h1>
            </Grid>
            <Grid item xs={5}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={cities.map((option) => option.city)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="From"
                    className="textField"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      ...register('from'),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                size="large"
                className="swapIcon"
                onClick={SwapDestinations}
              >
                <RouteOutlinedIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={cities.map((option) => option.city)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    className="textField"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      ...register('to'),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DateTimePicker
                    label="Date&Time picker"
                    value={date}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} className="textField" />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={2.25}></Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                className="submitbtn"
                size="large"
                onClick={navigateToInfo}
              >
                Search Connections
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};
