import UserData from '../models/user_data.js';
import HealthData from '../models/health_data.js';

const createUserDataService = async (userData) => {
  const {
    userId, fullname, age, sex, race, height, weight,
    comorbidity, isAlergic = false, useCigars = false, useDrugs = false,
    useMedication = false, useAlcohol = false, howManyCigars = '',
    alergics = '', howMuchAlcohol = '', howManyDrugs = '',
    whichMedications = ''
  } = userData;

  // Crear o actualizar los datos del usuario
  const createdUserData = await UserData.upsert({
    userId,
    fullname,
    age,
    sex,
    race,
    height,
    weight,
  });

  // Crear o actualizar los datos de salud del usuario
  await HealthData.upsert({
    userDataId: userId,
    comorbidity,
    isAlergic,
    useCigars,
    useDrugs,
    useMedication,
    useAlcohol,
    howManyCigars,
    alergics,
    howMuchAlcohol,
    howManyDrugs,
    whichMedications
  });

  return createdUserData;
};

export default createUserDataService;
