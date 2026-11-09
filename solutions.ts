export function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
}

export function processInput(
  value: string | number | boolean,
): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}

export function formatCoordinate(
  coordinate: readonly [
    latitude: number,
    longitude: number,
    locationName: string,
  ],
): string {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}

export function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export function getPopularCourses(
  courses: Course[],
  minStudents: number,
): Course[] {
  const result: Course[] = [];
  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      result.push(course);
    }
  }
  return result;
}

export function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];
  for (const item of items) {
    result.push(item[key]);
  }
  return result;
}

export class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

export async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
