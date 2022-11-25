import { useDispatch } from 'react-redux';
import {
  getDataWordTotal,
  getDataSummary,
  getDataSummarycountries,
  getDataForCountrie,
} from '../server/covidData';
import {
  allcountries,
  dataAllcountries,
} from '../features/Countries/redux/sliceCountries';

import { completeGeneralData } from '../features/Home/redux/HomeSlice';
import { selectCountry } from '../features/SingleCountrie/redux/SliceSingleCountry';
import { addRegister } from '../features/Symptoms/redux/sliceSymptomps';

export const useHome = () => {
  const dispatch = useDispatch();

  const getGeneralData = async () => {
    const totalData = await getDataWordTotal();
    const { Global } = await getDataSummary();
    console.log(Global);
    dispatch(completeGeneralData({ ...Global }));
  };

  const getDataCountries = async () => {
    const onlyCountries = await getDataSummarycountries();
    dispatch(allcountries(onlyCountries));
    const { Countries } = await getDataSummary();

    if (Countries !== undefined) {
      dispatch(
        dataAllcountries({
          data: [...Countries],
        })
      );
    } else {
      dispatch(
        dataAllcountries({
          data: onlyCountries,
        })
      );
    }
  };

  const getCountryRegisters = async (country: string) => {
    console.log(country);
    const data = await getDataForCountrie(country);
    data.reverse();
    dispatch(
      selectCountry({
        country: country,
        registers: data,
      })
    );
  };

  const addNewRegisterSymptom = (register: any) => {
    dispatch(addRegister(register));
  };

  return {
    getGeneralData,
    getDataCountries,
    getCountryRegisters,
    addNewRegisterSymptom,
  };
};
