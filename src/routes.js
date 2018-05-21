import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import {Route, IndexRoute} from 'react-router';
import React from 'react';
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/manageCoursePage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursesPage} />
        <Route path="ManageCourse" component={ManageCoursePage} />
        <Route path="ManageCourse/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage}/>
    </Route>
);