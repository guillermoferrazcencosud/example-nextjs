import { faCreditCard, faHandHoldingDollar, faMoneyBill, faSackDollar, faWallet } from '@fortawesome/free-solid-svg-icons';
import { ListLinksStruct } from './types';
export const ListLinks: ListLinksStruct[] = [
 {
    title: "Paris",
    link: "https://www.paris.cl/",
    accordion: false,
    className: "parisStyles",
    accordionList: null
 },
 {
  title: "Jumbo",
  link: "https://www.jumbo.cl/",
  accordion: false,
  className: "jumboStyles",
  accordionList: null
 },
 {
  title: "SantaIsabel",
  link: "https://www.santaisabel.cl/",
  accordion: false,
  className: "santaIsabelStyles",
  accordionList: null,
 },
 {
  title: "Mundo Experto",
  link: "https://mundoexperto.cl/",
  accordion: false,
  className: "default",
  accordionList: null,
 },
 {
  title: "Puntos Cencosud",
  link: "https://www.puntoscencosud.cl/puntos/",
  accordion: false,
  className: "default",
  accordionList: null,
 },
 {
  title: "Tarejeta Cencosud",
  link: "",
  accordion: true,
  className: "default",
  accordionList: [
    {
      icon: faWallet,
      title: "Paga tu tarjeta",
      link: "https://www.tarjetacencosud.cl/publico/pagos/landing/paga-tu-cuenta?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=paga%20tu%20cuenta"
    },
    {
      icon: faMoneyBill,
      title: "Simula un avance",
      link: "https://www.tarjetacencosud.cl/publico/producto/avance/landing/simulador?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=simula%20tu%20avance"
    },
    {
      icon: faSackDollar,
      title: "Simula un super avance",
      link: "https://www.tarjetacencosud.cl/publico/producto/super-avance/landing/simulador?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=simula%20tu%20super%20avance"
    },
    {
      icon: faHandHoldingDollar,
      title: "Paga tu credito de consumo",
      link: "https://www.tarjetacencosud.cl/publico/pagos/landing/paga-tu-credito-de-consumo?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=paga%20tu%20credito%20de%20consumo"
    },
    {
      icon: faCreditCard,
      title: "Solicita tu tarjeta",
      link: "https://www.mitarjetacencosud.cl/tarjeta-digital?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=solicita%20tu%20tarjeta"
    }
  ],
 },
 {
  title: "Centro de ayuda",
  link: "https://ayuda.easy.cl/",
  accordion: false,
  className: "default",
  accordionList: null
 },
 {
  title: "Mis compras",
  link: "https://ayuda.easy.cl/ayuda/login?servicio=transacciones",
  accordion: false,
  className: "default",
  accordionList: null
 },
 {
  title: "Tiendas",
  link: "https://www.easy.cl/tiendas",
  accordion: false,
  className: "default",
  accordionList: null
 }
]