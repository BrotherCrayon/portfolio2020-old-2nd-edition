import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Project } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private dbPath = '/project-tiles';

  projectsRef: AngularFireList<Project> = null;

  constructor(private db: AngularFireDatabase) {
    this.projectsRef = db.list(this.dbPath);
   }

   getProjectList(): AngularFireList<Project> {
     return this.projectsRef;
   }
}
