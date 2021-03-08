import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    new Project('Deviant',
      'A game I made for my senior project',
      '../../assets/img/deviant_action.png'),
    new Project('Pokemon Monopoly',
      'An online multiplayer board game',
      '../../assets/img/pokemon_monopoly.png'),
    new Project('Emerald Auto-Trainer',
      'A Pokemon Emerald automator',
      '../../assets/img/emerald_title.png'),
    new Project('Warcraft Chess',
      'A Warcraft-themed Chess game',
      ''),
    new Project('File Encryptor',
      'Encrypts files and folders',
      '../../assets/img/encryption.png'),
    new Project('Coinbase Helper',
      'Statistics from your Coinbase account',
      '../../assets/img/coinbase.png')
  ];

  public getProjects(): Project[] {
    return this.projects.slice();
  }

  public getProjectById(id: number): Project {
    return this.projects[id];
  }
}
