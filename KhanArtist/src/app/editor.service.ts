import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private contentSource = new BehaviorSubject<string>('');
  public content$: Observable<string> = this.contentSource.asObservable();

  constructor() { }

  updateContent(content: string): void {
    this.contentSource.next(content);
  }

  getContent(): string {
    return this.contentSource.value;
  }

  // Add methods for saving content, loading from server, etc.
  saveContent(content: string): void {
    // Implement saving logic (e.g., to localStorage or API)
    localStorage.setItem('editor-content', content);
    console.log('Content saved');
  }

  loadContent(): string {
    // Implement loading logic
    const content = localStorage.getItem('editor-content') || '';
    this.updateContent(content);
    return content;
  }
}