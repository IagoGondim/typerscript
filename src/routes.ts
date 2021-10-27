import{Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'
export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Iago",
        duration: 10
    });

    return response.send();
}