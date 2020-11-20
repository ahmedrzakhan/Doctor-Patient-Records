const patients = [
  {
    name: "Ahmed Khan",
    gender: "Male",
    age: 24,
    image:
      "https://avatars3.githubusercontent.com/u/25074031?s=460&u=e275b48586966dbecf316f5f10fbcc3b2e954a35&v=4",
    medicines: [
      { name: "Zedex", quantity: 10 },
      { name: "Asthakind", quantity: 4 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Misaal Ambasta",
    gender: "Male",
    age: 27,
    image:
      "https://avatars1.githubusercontent.com/u/57540242?s=460&u=dbf44927e8062685000ef99c25e85d27c7df737c&v=4",
    medicines: [
      { name: "Azithromycin", quantity: 5 },
      { name: "Amifostine", quantity: 13 },
    ],
    assignedTo: ["amanvats"],
  },
  {
    name: "Alok Kothiyal",
    gender: "Male",
    age: 25,
    image:
      "https://avatars3.githubusercontent.com/u/23238432?s=400&u=0a0ef33f8323529c71a9677a747d392c01448e96&v=4",
    medicines: [
      { name: "Efavirenz", quantity: 5 },
      { name: "Aldesleukin", quantity: 10 },
    ],
    assignedTo: ["albertsebastian"],
  },
  {
    name: "Omkarnath Parida",
    gender: "Male",
    age: 27,
    image:
      "https://avatars0.githubusercontent.com/u/42507069?s=400&u=42b48fbee6c1c8551ba591596bd3ad9570ce3f53&v=4",
    medicines: [
      { name: "Alfuzosin", quantity: 5 },
      { name: "Alirocumab", quantity: 13 },
    ],
    assignedTo: ["amanvats"],
  },
  {
    name: "Manish Kumar",
    gender: "Male",
    age: 22,
    image:
      "https://avatars0.githubusercontent.com/u/37025125?s=460&u=683d2c67fdd1ca67fe56c46ad92f1ad1abf93a19&v=4",
    medicines: [
      { name: "Allegra Hives", quantity: 25 },
      { name: "Alprazolam", quantity: 33 },
    ],
    assignedTo: ["albertsebastian"],
  },
  {
    name: "Shubham Kumar",
    gender: "Male",
    age: 26,
    image:
      "https://avatars3.githubusercontent.com/u/63995613?s=460&u=7544107dac3e80424b62d4380a37977a9b42154a&v=4",
    medicines: [
      { name: "Allegra Hives", quantity: 15 },
      { name: "Alprazolam", quantity: 13 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Kritika Tripathi",
    gender: "Male",
    age: 26,
    image:
      "https://avatars2.githubusercontent.com/u/58283457?s=460&u=06b6bf62d0b81e6afeace8983b5da066546c4e5e&v=4",
    medicines: [
      { name: "Allegra Hives", quantity: 15 },
      { name: "Alprazolam", quantity: 13 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Sheelu Krishnatrayi",
    gender: "Female",
    age: 26,
    image:
      "https://avatars2.githubusercontent.com/u/63995282?s=400&u=9f0b62e75bbd56a6c13841a1381502fa82dc65df&v=4",
    medicines: [
      { name: "Xolair", quantity: 25 },
      { name: "Xylocaine", quantity: 23 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Akash Pathak",
    gender: "Male",
    age: 27,
    image:
      "https://avatars2.githubusercontent.com/u/48826118?s=460&u=6f6e352df061c14f8b816d494c753ced441152da&v=4",
    medicines: [
      { name: "Carbatrol", quantity: 5 },
      { name: "Matnomelines", quantity: 3 },
    ],
    assignedTo: ["amanvats"],
  },
  {
    name: "Revanth Raghu",
    gender: "Male",
    age: 26,
    image:
      "https://avatars2.githubusercontent.com/u/62105505?s=460&u=4999a641e27cbb592b402d65f587712234d941d8&v=4",
    medicines: [
      { name: "Jantoven", quantity: 5 },
      { name: "Jenloga", quantity: 3 },
    ],
    assignedTo: ["albertsebastian"],
  },
  {
    name: "Sai Nihal",
    gender: "Male",
    age: 26,
    image:
      "https://ca.slack-edge.com/T011D7XGDBR-U012A7U1B89-40b149099eff-512",
    medicines: [
      { name: "Fanapt", quantity: 15 },
      { name: "Fanatrez", quantity: 13 },
    ],
    assignedTo: ["albertsebastian"],
  },
  {
    name: "Sai Nihal",
    gender: "Male",
    age: 26,
    image:
      "https://ca.slack-edge.com/T011D7XGDBR-U012A7U1B89-40b149099eff-512",
    medicines: [
      { name: "Fanapt", quantity: 15 },
      { name: "Fanatrez", quantity: 13 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Soumitha Bhaskara",
    gender: "Female",
    age: 23,
    image:
      "https://avatars0.githubusercontent.com/u/63995606?s=460&u=cdf8ad7bb14e8efd51074a211a4d44efd84c7f14&v=4",
    medicines: [
      { name: "Warfarin", quantity: 15 },
      { name: "Welcol", quantity: 30 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Aayushi Shah",
    gender: "Female",
    age: 25,
    image:
      "https://avatars0.githubusercontent.com/u/47210224?s=460&u=f878de944246996cf5b8d85bf82e93c224ecc657&v=4",
    medicines: [
      { name: "Uabano", quantity: 25 },
      { name: "Uarezino", quantity: 10 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Kritika Tripathi",
    gender: "Female",
    age: 25,
    image:
      "https://avatars2.githubusercontent.com/u/58283457?s=460&u=06b6bf62d0b81e6afeace8983b5da066546c4e5e&v=4",
    medicines: [
      { name: "Labetanol", quantity: 16 },
      { name: "Lac-Hydrin", quantity: 13 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Shreyas S",
    gender: "Male",
    age: 25,
    image:
      "https://avatars2.githubusercontent.com/u/51715896?s=460&u=f8cfb818c96fa9b363219f5198e5299d9f078a7c&v=4",
    medicines: [
      { name: "Kabikinack", quantity: 26 },
      { name: "Kadackla", quantity: 23 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
  {
    name: "Manideep",
    gender: "Male",
    age: 25,
    image:
      "https://avatars0.githubusercontent.com/u/43706578?s=400&u=2736418f4498ceebf8bfec15f010c1db3db4d128&v=4",
    medicines: [
      { name: "Maalox", quantity: 36 },
      { name: "Mafenide", quantity: 33 },
    ],
    assignedTo: ["amanvats", "albertsebastian"],
  },
];

module.exports = { patients };
