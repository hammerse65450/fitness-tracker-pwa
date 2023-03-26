import Dexie, { Table } from 'dexie';
import { Exercise } from './exercise';
import { Category } from './category';

export class AppDB extends Dexie {
  exercises!: Table<Exercise, number>;
  categories!: Table<Category, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      categories: '++id',
      exercises: '++id, categoryId',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await db.categories.bulkAdd([
      {
        name: 'Brust',
      },
      {
        name: 'Beine',
      },
      {
        name: 'Rücken',
      },
      {
        name: 'Schultern',
      },
      {
        name: 'Bizeps',
      },
      {
        name: 'Trizeps',
      },
    ]);

    await db.exercises.bulkAdd([
      {
        categoryId: 1,
        name: 'Butterfly',
        lastValue: '50',
        imagePath: 'assets/images/Gym.jpg',
      },
      {
        categoryId: 1,
        name: 'Bankdrücken',
        lastValue: '50',
        imagePath: 'assets/images/Kreuzheben.jpg',
      },
      {
        categoryId: 2,
        name: 'Kniebeugen',
        lastValue: '50',
        imagePath: 'assets/images/Gym.jpg',
      },
      {
        categoryId: 3,
        name: 'Latzug',
        lastValue: '50',
        imagePath: 'assets/images/Kreuzheben.jpg',
      },
      {
        categoryId: 4,
        name: 'Military Press',
        lastValue: '50',
        imagePath: 'assets/images/Gym.jpg',
      },
      {
        categoryId: 5,
        name: 'Bizeps Curls',
        lastValue: '50',
        imagePath: 'assets/images/Gym.jpg',
      },
      {
        categoryId: 6,
        name: 'Trizeps',
        lastValue: '50',
        imagePath: 'assets/images/Gym.jpg',
      },
      {
        categoryId: 3,
        name: 'Rudern',
        lastValue: '50',
        imagePath: 'assets/images/Gym.jpg',
      },
    ]);
  }

  async resetDatabase() {
    await db.transaction('rw', 'categories', 'excercises', () => {
      this.exercises.clear();
      this.categories.clear();
      this.populate();
    });
  }
}

export const db = new AppDB();
