import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const studentId = useSelector(state => state.student.id);

  const Routes = createRouter(studentId);

  return <Routes />;
}
