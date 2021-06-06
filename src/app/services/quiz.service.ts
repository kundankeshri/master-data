import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    let data  = {
      "id": 3,
      "name": "Design Patterns",
      "description": "Design Patterns Quiz including solid principles.",
      "questions": [
          {
              "id": 1010,
              "name": "In SOLID principle, O stands for:",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Objects and Variables",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Open-Closed Principle",
                      "isAnswer": true
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Object Oriented Programming",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "OutOfMemory Exception",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1011,
              "name": "Which pattern defines an interface for creating an object, but let the subclasses decide which class to instantiate. It let the instantiation differ to subclasses.",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Factory Method",
                      "isAnswer": true
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Abstract Factory",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Builder",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "Prototype",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
         
      ]
  } 
    return data;
  }

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
