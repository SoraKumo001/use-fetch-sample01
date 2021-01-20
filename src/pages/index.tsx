import React from 'react';
import points from '../datas/point.json';
import Link from 'next/link';

export const Page = () => {
  return (
    <>
      <style jsx>{`
        .area {
          display: flex;
        }
        .areaName {
          min-width: 6em;
        }
        .cities {
          display: flex;
          flex-wrap: wrap;
        }
        .city {
          min-width: 6em;
        }
      `}</style>
      <h1>地点情報</h1>
      {points.map((area) => (
        <div key={area.name} className="area">
          <div className="areaName">{area.name}</div>
          <div className="cities">
            {area.cities.map((city) => (
              <div key={city.id} className="city">
                <Link href={`/${city.id}/`}>{city.name}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Page;
