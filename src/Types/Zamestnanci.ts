export default interface Zamestnanci {
    zamestnanecId: number;
    meno: string;
    priezvisko: string;
    adresa: string;
    datumNarodenia: Date;
    datumNastupu: Date;
    archivovany: boolean;
    idPozicie: number;
    plat: number;
  }