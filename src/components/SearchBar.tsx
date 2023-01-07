import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker, DesktopDatePicker } from '@mui/x-date-pickers';
import './SearchBar.css';
import { ConInfo, TrainInfo } from '../types';
import cities from '../mock-data/cities.json';

type FormValues = {
  from: string;
  to: string;
  day: number;
  month: number;
  hour: number;
  minute: number;
};

const favouriteRoutes = [
  {
    fromDestination: 'Bratislava',
    toDestination: 'Košice',
  },
  {
    fromDestination: 'Košice',
    toDestination: 'Bratislava',
  },
];

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type SearchBarProps = {
  setConnections: React.Dispatch<React.SetStateAction<ConInfo>>;
  searchInfo: any;
  trains: TrainInfo[];
  isMain: boolean;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
  setdate: (date: string) => void;
  setTime: (hours: number, minutes: number) => void;
  updateDestinations: (from: string, to: string) => void;
  setChosenTrain: (train: TrainInfo) => void;
};

export const SearchBar = ({
  setConnections,
  setFrom,
  setTo,
  setdate,
  setTime,
  searchInfo,
  isMain,
  updateDestinations,
  trains,
  setChosenTrain,
}: SearchBarProps) => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [from, setF] = useState(searchInfo?.from || '');
  const [to, setT] = useState(searchInfo?.to || '');
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setF(searchInfo?.from || '');
    setT(searchInfo?.to || '');
  }, [searchInfo]);

  const handleChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  const navigate = useNavigate();
  const navigateToInfo = () => {
    navigate('/connections');
  };
  const DefVals = () => {
    const curD = new Date();
    const defVal: FormValues = {
      from: '',
      to: '',
      day: curD.getDate(),
      month: curD.getMonth() + 1,
      hour: curD.getHours(),
      minute: curD.getMinutes(),
    };
    return defVal;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: DefVals() });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setConnections({
      from: data.from,
      to: data.to,
      month: data.month,
      day: data.day,
      hour: data.hour,
      minute: data.minute,
    });
  };
  const SwapDestinations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className={isMain ? 'SearchContainer' : ''}>
      <div className="SearchBar">
        <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
          <Grid container spacing={2}>
            {isMain ? (
              <>
                <Grid item xs={12}>
                  <h1>Choose your favorite route:</h1>
                </Grid>
                {favouriteRoutes.map((favouriteRoute) => (
                  <>
                    <Grid item xs={4}>
                      <Button
                        variant="outlined"
                        style={{
                          padding: '0px 10px',
                          backgroundColor: 'white',
                        }}
                        onClick={() => {
                          setFrom(favouriteRoute.fromDestination);
                          setTo(favouriteRoute.toDestination);
                          handleOpen();
                        }}
                      >
                        <h2>
                          <span>
                            {favouriteRoute.fromDestination}
                            {' - '}
                            {favouriteRoute.toDestination}
                          </span>
                        </h2>
                      </Button>
                    </Grid>
                  </>
                ))}
                <hr className="line" />
              </>
            ) : null}
            <Grid item xs={12}>
              <h1 className="searchTitle">
                {isMain ? 'Connections and tickets:' : 'Connection search:'}
              </h1>
            </Grid>
            <Grid item xs={5}>
              <Autocomplete
                freeSolo
                id="fromDestination"
                includeInputInList
                options={cities
                  .filter((city) => city.city !== searchInfo?.to)
                  .map((option) => option.city)}
                value={from}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="From"
                    value={from}
                    className="textField"
                  />
                )}
                onChange={(event, newValue) => {
                  setFrom(newValue);
                }}
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
                id="toDestination"
                includeInputInList
                options={cities
                  .filter((city) => city.city !== searchInfo?.from)
                  .map((option) => option.city)}
                value={to}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    value={to}
                    className="textField"
                  />
                )}
                onChange={(event, newValue) => {
                  setTo(newValue);
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DateTimePicker
                    value={date}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} className="textField" />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={2.5}></Grid>
            <Grid item xs={4} style={{ padding: '16px 0px 0px 9px' }}>
              <Button
                variant="outlined"
                className="submitbtn"
                size="large"
                onClick={() => {
                  setdate(dayjs(date).format('DD.MM.YYYY'));
                  setTime(dayjs(date).hour(), dayjs(date).minute());
                  updateDestinations(searchInfo.from, searchInfo.to);
                  navigateToInfo();
                }}
                disabled={!from || !to}
              >
                Search Connections
              </Button>
            </Grid>
          </Grid>
        </form>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Preferred time of departure
            </Typography>
            <Typography>
              Route: {from} - {to}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack sx={{ width: '150px' }}>
                <DesktopDatePicker
                  inputFormat="DD.MM.YYYY"
                  value={date}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {trains.map((train) => (
                <Chip
                  sx={{
                    marginRight: '8px',
                    marginBottom: '8px',
                    width: '120px',
                  }}
                  label={`${train.departureTime} - ${train.arrivalTime}`}
                  component="a"
                  variant="outlined"
                  color="primary"
                  clickable
                  onClick={() => {
                    setdate(dayjs(date).format('DD.MM.YYYY'));
                    setChosenTrain(train);
                    updateDestinations(from, to);
                    navigate('/checkout-order');
                  }}
                />
              ))}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
