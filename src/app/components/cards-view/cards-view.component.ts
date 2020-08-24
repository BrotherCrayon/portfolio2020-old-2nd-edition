import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css']
})
export class CardsViewComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  cards = [
    {
      title: 'My Dissetation',
      area: 'Virtual Reality',
      description: 'Understanding the spatial perception difference between a real world and an accurately scaled 3d model of the room.',
      buttonText: 'Show me',
      img: 'assets/images/diss-3d-env.png',
      link: '/diss'
    },
    {
      title: 'Listify',
      area: 'Full Stack Application',
      description: 'Full stack to-do list application using springboot for the backend and html & javascript for the frontend. This application connected to a database and allowed for account creation and management.',
      buttonText: 'Show me',
      img: 'assets/images/listify.png',
      link: '/listify'
    },
    {
      title: 'Virtual Reality',
      area: 'Virtual Reality',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'assets/images/VRPoster.png',
      link: '/virtual-reality'
    },
    {
      title: '3D Modelling',
      area: 'AutoDesk 3ds Max, Unreal Engine',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'assets/images/all-models.png',
      link: '/'
    },
    {
      title: 'Serious Games',
      area: 'Games Development, Unity 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'assets/images/srsgame.jpg',
      link: '/serious-games'
    },
    {
      title: 'Project Title Six',
      area: 'tbc',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      link: '/diss'
    },

  ];

}
