'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        fullname: "Martínez Pedro",
        age: 18,
        dni: 40258743,
        email: "pedromartinez@email.com",
        password: "$2a$10$IH.s0cYiqkxPSUk9T7/6ee8jgeKC/FfQo.Olj2zGTSi0mnLYx9xfi",
        img: "user-default.png",
        roles_id: 1
      },
      {
        fullname: "Rodríguez Ana",
        age: 25,
        dni: 42543687,
        email: "anarodriguez@email.com",
        password: "$2a$10$BgYeDzxaM2YUBz2m28LgU.6CXpw0/h6stxn4ao8SX1cVxQ./8eeoS",
        img: "avatar1699479310232.png",
        roles_id: 2
      },
      {
        fullname: "Pérez Luisa",
        age: 30,
        dni: 37254781,
        email: "luisaperez@email.com",
        password: "$2a$10$ypWgHcRiCpfp2vtnXwz4.OX2Ljv.AsN1RLsPmtxCLKiusvqzJ9Edm",
        img: "user-default.png",
        roles_id: 1
      },
      {
        fullname: "López Juan",
        age: 35,
        dni: 28451726,
        email: "juanlopez@email.com",
        password: "$2a$10$zkJnFctHzf4dsFD1slvO.uT4Wn6rpytm1YXsb3MU4s82SPjuSlgsK",
        img: "avatar1699479970508.png",
        roles_id: 1
      },
      {
        fullname: "Sánchez María",
        age: 40,
        dni: 19471569,
        email: "mariasanchez@email.com",
        password: "$2a$10$s2lpgK5rQd.YmLtwkG2E3.BufOADV6YfFQbJ9Shkm2OSN2J/nQtji",
        img: "avatar1699484968761.png",
        roles_id: 2
      },
      {
        fullname: "González Carlos",
        age: 45,
        dni: 15472984,
        email: "carlosgonzalez@email.com",
        password: "$2a$10$qbsZCI2T4MCH5Sc/ZaCdIumuE4FUhBNERB.KIRgJVr209LdrfFxrm",
        img: "avatar1699486056597.png",
        roles_id: 1
      },
      {
        fullname: "Rodríguez Laura",
        age: 50,
        dni: 11472651,
        email: "laurarodriguez@email.com",
        password: "$2a$10$Lp1zMlKkAOzpydF7uFSaru/ZWWTUKKRDQ4Tk7Lxqdtz9PK8l6S0TK",
        img: "user-default.png",
        roles_id: 2
      },
      {
        fullname: "Fernández Pablo",
        age: 55,
        dni: 8475982,
        email: "pablofernandez@email.com",
        password: "$2a$10$CwK06Zq6sIX9GZNQixj4kuEy1qxpzTnDWWqozzpE.OQztkPVqio/6",
        img: "avatar1699486577536.png",
        roles_id: 1
      },
      {
        fullname: "López Carmen",
        age: "60",
        dni: "6254712",
        email: "carmenlopez@email.com",
        password: "$2a$10$Jnjxe00HfoomN1HO1CdCH.0GFDPpWEJ4mONKze/w40eZDQ4p64Bby",
        img: "avatar1699486740389.png",
        roles_id: "1"
      },
      {
        fullname: "Torres Manuel",
        age: "25",
        dni: "42571432",
        email: "manueltorres@email.com",
        password: "$2a$10$773Crh32ILPHVASXn.uNkeqwvCApmdqLosRsmQEHk5f.W3YfpXTSm",
        img: "user-default.png",
        roles_id: "2"
      },
      {
        fullname: "García Isabel",
        age: "30",
        dni: "37258974",
        email: "isabelgarcia@email.com",
        password: "$2a$10$3.fM/27Nq8FYh.UumYgsW.cL/7SdkGATANsvYLKMrysF8DqJbJS8W",
        img: "user-default.png",
        roles_id: "2"
      },
      {
        fullname: "Ruiz Javier",
        age: "35",
        dni: "23476148",
        email: "javierruiz@email.com",
        password: "$2a$10$usLPUHFpHwHSwMQIeepCRep/x4GOHmhGIuTIlXBhjDCyhxb3oUQ8.",
        img: "avatar1699914892501.png",
        roles_id: "2"
      },
      {
        fullname: "Marino Augusto",
        age: "23",
        dni: "34567890",
        email: "augusto@gmail.com",
        password: "$2a$10$Rm/TMWmHSw1TyqPzgrkShO7U6M7AzJ1ok7ljuA7dy2Y53FE7i8sP.",
        img: "user-default.png",
        roles_id: "2"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
