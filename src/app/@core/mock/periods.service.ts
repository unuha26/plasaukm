import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  getYears() {
    return [
      '2010', '2011', '2012',
      '2013', '2014', '2015',
      '2016', '2017', '2018',
    ];
  }

  getMonths() {
    return [
      'Januari', 'Febuari', 'Maret',
      'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September',
      'Oktober', 'November', 'Desember',
    ];
  }

  getWeeks() {
    return [
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
      'Minggu',
    ];
  }
}
