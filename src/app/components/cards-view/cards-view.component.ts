import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/projects/projects';
import { ProjectsService } from 'src/app/projects/projects.service';


@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css']
})
export class CardsViewComponent implements OnInit {

  projects: Array<Project> = [];
  showProject: Project;

  constructor(private projectService: ProjectsService) { }

  retrieveProjects() {
    this.projectService.getProjectList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(projects => {
      this.projects = projects;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.retrieveProjects();
  }

}
