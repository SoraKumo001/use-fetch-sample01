import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFetch } from '@react-liblary/use-fetch';
import { Weather } from '../../components/Weather';
import { WeatherType } from '../../types/weatherType';

export const Page = () => {
  const router = useRouter();
  const id = router.query['id'];
  const { data, error, isValidating, dispatch } = useFetch<WeatherType>(
    `https://weather.tsukumijima.net/api/forecast/city/${id}`,
    { skip: isNaN((id as unknown) as number) } //IDが数値以外なら実行しない
  );
  return (
    <>
      <style jsx>{`
        .button {
          margin-left: 16px;
        }
      `}</style>
      <div>
        <Link href="/">←(戻る)</Link>
        <button
          className="button"
          onClick={() => {
            dispatch();
          }}
        >
          再読み込み
        </button>
      </div>

      {isValidating && <div>読み込み中</div>}
      {error && <div>エラー{String(error)}</div>}
      {data && <Weather value={data} />}
    </>
  );
};

export default Page;
