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
      title: 'Project One',
      area: 'Virtual Reality',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'assets/images/diss-3d-env.png'
    },
    {
      title: 'Project Two',
      area: 'Project area specialty, can have a short sentence.',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. '
      + 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally '
      + 'bred for hunting.',
      buttonText: 'Show me',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Project Title Three',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Project Title Four',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Project Title Five',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Project Title Six',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Show me',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    
  ];

}
