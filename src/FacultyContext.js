import React from 'react';

const FacultyContext = React.createContext()

const FacultyProvider = FacultyContext.Provider;
const FacultyConsumer = FacultyContext.Consumer;

export {FacultyProvider, FacultyConsumer}

export default FacultyContext