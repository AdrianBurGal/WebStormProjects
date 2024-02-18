import { Routes } from '@angular/router';
import { Ex01Component } from './components/ex01/ex01.component';
import { Ex02Component } from './components/ex02/ex02.component';
import { Ex03Component } from './components/ex03/ex03.component';
import { Ex04Component } from './components/ex04/ex04.component';
import { Ex05Component } from './components/ex05/ex05.component';
import { Ex06Component } from './components/ex06/ex06.component';
import { Ex07Component } from './components/ex07/ex07.component';
import { Ex08Component } from './components/ex08/ex08.component';
import { Ex09Component } from './components/ex09/ex09.component';
import { Ex10Component } from './components/ex10/ex10.component';

export const routes: Routes = [
  { path: 'ex01', component: Ex01Component, title: 'Ejercicio 01' },
  { path: 'ex02', component: Ex02Component, title: 'Ejercicio 02' },
  { path: 'ex03', component: Ex03Component, title: 'Ejercicio 03' },
  { path: 'ex04', component: Ex04Component, title: 'Ejercicio 04' },
  { path: 'ex05', component: Ex05Component, title: 'Ejercicio 05' },
  { path: 'ex06', component: Ex06Component, title: 'Ejercicio 06' },
  { path: 'ex07', component: Ex07Component, title: 'Ejercicio 07' },
  { path: 'ex08', component: Ex08Component, title: 'Ejercicio 08' },
  { path: 'ex09', component: Ex09Component, title: 'Ejercicio 09' },
  { path: 'ex10', component: Ex10Component, title: 'Ejercicio 10' },
];
