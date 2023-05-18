import { memo, useState } from 'react';

import { useTranslate } from '@ayub-begimkulov/i18n';

import Select from 'shared/ui/Select/Select';

const options = [
  { title: 'янв', value: '01' },
  { title: 'фев', value: '02' },
  { title: 'мар', value: '03' },
  { title: 'апр', value: '04' },
  { title: 'май', value: '05' },
  { title: 'июн', value: '06' },
  { title: 'июл', value: '07' },
  { title: 'авг', value: '08' },
  { title: 'сен', value: '09' },
  { title: 'окт', value: '10' },
  { title: 'ноя', value: '11' },
  { title: 'дек', value: '12' },
];

const MainPage = memo(() => {
  const t = useTranslate();

  const [month, setMonthValue] = useState('');
  const handleMonthSelect = (value: string) => {
    setMonthValue(value);
  };
  const selectedMonth = options.find((item) => item.value === month);
  return (
    <div>
      {t('Main Page')}

      <Select
        theme="primary"
        mode="rows"
        options={options}
        selected={selectedMonth || null}
        onChange={handleMonthSelect}
        placeholder="Chose mounth"
      />
    </div>
  );
});
export default MainPage;
