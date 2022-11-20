import { Stop } from '../types';

type Props = {
  stops: Stop[];
};

export const RouteInfo = ({ stops }: Props) => {
  return (
    <>
      {stops.map((stop) => {
        return (
          <li>
            <span style={{ color: '#1976d2' }}>{stop.time}</span> {'  '}{' '}
            <span style={{ color: '#002664' }}>{stop.city}</span> <br />
          </li>
        );
      })}
    </>
  );
};
