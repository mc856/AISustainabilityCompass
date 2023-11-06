import { chain } from "mathjs";

const n = 0.63;
const r = 1.42;

const alpha = chain(n - 1).divide(n);
const beta = chain(r - 1).divide(r);

const regionData2023 = {
  北京: {
    a: 17.793077221527856,
    employment: 1197.3776703680933,
    highly_educated: 44.73299423605204,
    crime_k1: 0.0007172304845246,
  },
  天津: {
    a: 12.883777822508645,
    employment: 688.6830259668955,
    highly_educated: 30.806589514017105,
    crime_k1: 0.0002708581134921,
  },
  河北: {
    a: 7.103651195917474,
    employment: 3846.6378780545742,
    highly_educated: 9.53098376840353,
    crime_k1: 1.4684172333515282e-5,
  },
  山西: {
    a: 8.166559525524447,
    employment: 1811.146923701276,
    highly_educated: 12.218328032642605,
    crime_k1: 8.807833962267564e-5,
  },
  内蒙古: {
    a: 10.314829707634464,
    employment: 1320.5885772769566,
    highly_educated: 15.093787245452404,
    crime_k1: 7.953153326654044e-5,
  },
  辽宁: {
    a: 7.401001998469774,
    employment: 2321.32105936816,
    highly_educated: 16.704669499769807,
    crime_k1: 1.1238026379326232e-5,
  },
  吉林: {
    a: 6.486515871515987,
    employment: 1356.6644271665746,
    highly_educated: 12.543939612805843,
    crime_k1: 5.031408041367788e-5,
  },
  黑龙江: {
    a: 6.3793791927669306,
    employment: 1767.5123905717746,
    highly_educated: 12.543269934132695,
    crime_k1: 1.5909038245973852e-5,
  },
  上海: {
    a: 16.40950909834963,
    employment: 1446.216659990046,
    highly_educated: 38.10933517105877,
    crime_k1: 0.0005607211277682,
  },
  江苏: {
    a: 14.320061567972642,
    employment: 4901.047394506689,
    highly_educated: 14.46650730445981,
    crime_k1: 6.632270553410865e-5,
  },
  浙江: {
    a: 11.256218034177044,
    employment: 3909.276861871595,
    highly_educated: 14.372412785887718,
    crime_k1: 1.551152014326223e-5,
  },
  安徽: {
    a: 8.366007042399259,
    employment: 4022.868076204247,
    highly_educated: 10.359351402148604,
    crime_k1: 1.1877319277340538e-5,
  },
  福建: {
    a: 13.540521856994278,
    employment: 2258.058099578815,
    highly_educated: 11.98296308517456,
    crime_k1: 0.0001054629565943,
  },
  江西: {
    a: 8.56520622969507,
    employment: 2332.064099475317,
    highly_educated: 10.247252751141788,
    crime_k1: 3.0836042633724995e-5,
  },
  山东: {
    a: 9.476488502955071,
    employment: 5719.257528552592,
    highly_educated: 9.363710571080446,
    crime_k1: 5.3355559898045184e-5,
  },
  河南: {
    a: 7.938987940620558,
    employment: 4869.596506618711,
    highly_educated: 7.664753027260303,
    crime_k1: 1.0155598936761942e-5,
  },
  湖北: {
    a: 9.46210255205727,
    employment: 3330.7454014605364,
    highly_educated: 11.197781916707754,
    crime_k1: 7.833293325096484e-5,
  },
  湖南: {
    a: 8.84140733516446,
    employment: 3790.886639888603,
    highly_educated: 10.219200866296887,
    crime_k1: 1.7772264179923412e-5,
  },
  广东: {
    a: 10.694858248093317,
    employment: 7193.351352581574,
    highly_educated: 14.283345768693836,
    crime_k1: 8.292434562278161e-5,
  },
  广西: {
    a: 6.438059501426171,
    employment: 2679.3563906874792,
    highly_educated: 8.890457903966308,
    crime_k1: 9.814490571235304e-6,
  },
  海南: {
    a: 7.338744801355952,
    employment: 562.0844661901766,
    highly_educated: 12.094431584700942,
    crime_k1: 2.855600370730698e-5,
  },
  重庆: {
    a: 10.273052367122313,
    employment: 1662.1241851653203,
    highly_educated: 12.388460397720335,
    crime_k1: 2.9013879976232573e-5,
  },
  四川: {
    a: 7.368036423551864,
    employment: 4690.1208527941335,
    highly_educated: 9.668370543047786,
    crime_k1: 2.5975431217093e-5,
  },
  贵州: {
    a: 6.7462339947824805,
    employment: 1832.8959862070155,
    highly_educated: 9.05587510485202,
    crime_k1: 1.3769473711616806e-5,
  },
  云南: {
    a: 6.34745155167537,
    employment: 2859.649372119268,
    highly_educated: 8.492006281390786,
    crime_k1: 1.556206025937644e-5,
  },
  西藏: {
    a: 6.640870002790623,
    employment: 196.15154124145803,
    highly_educated: 10.874416086357089,
    crime_k1: 3.987108500252101e-7,
  },
  陕西: {
    a: 8.839041134847305,
    employment: 2117.7086663632144,
    highly_educated: 11.306332075968385,
    crime_k1: 1.87205347827816e-5,
  },
  甘肃: {
    a: 4.84771637883292,
    employment: 1290.7857916587018,
    highly_educated: 9.500149130821228,
    crime_k1: 1.058222252427667e-5,
  },
  青海: {
    a: 7.348416528165605,
    employment: 290.84458567993426,
    highly_educated: 13.95949862105772,
    crime_k1: 2.987786000509637e-5,
  },
  宁夏: {
    a: 7.952185895894898,
    employment: 349.51273682424306,
    highly_educated: 15.68514072149992,
    crime_k1: 3.666314737752976e-5,
  },
  新疆: {
    a: 7.473857160462386,
    employment: 1418.2731480618525,
    highly_educated: 11.291872397065164,
    crime_k1: 5.224536001431543e-5,
  },
};

const getRegionData = (region: string) => regionData2023[region];

const getGdp = (
  userNum: number,
  wordNum: number,
  modelName: string,
  modelSize: number,
  city: string,
) => {
  const cityAlpha = 1;
  const modelK = getModelK(userNum, wordNum, modelName, modelSize, cityAlpha);
  const regionData = getRegionData("北京");
  const a = regionData.a;
  const employment = regionData.employment;
  const highlyEducated = regionData.highly_educated;
  return chain(chain(modelK).exp(beta))
    .add(
      chain(employment)
        .multiply(1 - highlyEducated)
        .exp(beta),
    )
    .exp(chain(alpha).divide(beta))
    .add(chain(employment).multiply(highlyEducated).exp(alpha))
    .exp(alpha)
    .multiply(a);
};

export const getWh = (
  userNum: number,
  wordNum: number,
  modelName: string,
  modelSize: number,
  city: string,
) => {
  const cityAlpha = 1;
  const modelK = getModelK(userNum, wordNum, modelName, modelSize, cityAlpha);
  const regionData = getRegionData("北京");
  const a = regionData.a;
  const employment = regionData.employment;
  const highlyEducated = regionData.highly_educated;
  const highEducatedNum = chain(employment).multiply(highlyEducated);
  const lowEducatedNum = chain(employment).multiply(1 - highlyEducated);
  return chain(modelK)
    .exp(beta)
    .add(chain(lowEducatedNum).exp(beta))
    .exp(chain(alpha).divide(beta))
    .add(highEducatedNum.exp(alpha))
    .exp(alpha - 1)
    .multiply(a)
    .multiply(alpha - 1)
    .multiply(alpha)
    .multiply(chain(highlyEducated).exp(alpha - 1));
};

export const getWl = (
  userNum: number,
  wordNum: number,
  modelName: string,
  modelSize: number,
  city: string,
) => {
  const cityAlpha = 1;
  const modelK = getModelK(userNum, wordNum, modelName, modelSize, cityAlpha);
  const regionData = getRegionData("北京");
  const a = regionData.a;
  const employment = regionData.employment;
  const highlyEducated = regionData.highly_educated;
  const highEducatedNum = chain(employment).multiply(highlyEducated);
  const lowEducatedNum = chain(employment).multiply(1 - highlyEducated);
  return chain(modelK)
    .exp(beta)
    .add(chain(lowEducatedNum).exp(beta))
    .exp(chain(alpha).divide(beta))
    .add(highEducatedNum.exp(alpha))
    .exp(alpha - 1)
    .multiply(
      chain(k)
        .exp(beta)
        .add(chain(lowEducatedNum).exp(beta))
        .exp(chain(alpha).divide(beta).add(-1)),
    )
    .multiply(a)
    .multiply(alpha)
    .multiply(alpha)
    .multiply(chain(lowEducatedNum).exp(alpha - 1));
};
