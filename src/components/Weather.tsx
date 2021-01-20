import { WeatherType } from '../types/weatherType';

interface Props {
  value: WeatherType;
}

export const Weather = ({ value }: Props) => (
  <>
    {value.error || (
      <div>
        <style jsx>{`
          .title {
            font-size: 24px;
            text-decoration: underline;
          }
          .description {
            white-space: pre-wrap;
          }
          .days {
            margin: 8px;
          }
        `}</style>
        <div className="title">{value.title}</div>
        <div className="days">
          {value.forecasts
            .slice()
            .reverse()
            .map((forecast) => (
              <div key={forecast.date}>
                {forecast.date} {forecast.telop}
              </div>
            ))}
        </div>
        <div className="description">{value.description.text}</div>
      </div>
    )}
  </>
);
