import React from "react";

const Blogs = () => {
  return (
    <section className="w-3/4 px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="">
        <div>
          <h1 className="mb-6 text-2xl font-light text-gray-900 md:text-3xl">
            Questions and Answers
          </h1>
          <p className="mt-10 mb-3 font-semibold text-gray-900">
            What is Context API?
          </p>
          <p className="text-gray-600">
            In React application, we passed data in a top to down approach via
            props. Sometimes it create problems for certain types of props that
            are required by many components in the React application.The Context
            API can be used to share data with multiple components, without
            having to pass data through props manually.This API is the
            alternative to "prop drilling".it can move props from grandparent to
            child to parent, and so on by producing global variable..using
            React.createContext() . It returns a consumer and a provider.
            Provider is a component that provides the state to its children.
            Consumer as it so happens is a component that consumes and uses the
            state
          </p>
          <p className="mt-10 mb-3 font-semibold text-gray-900">
            what are Inline, Block, Inline-Block?
          </p>
          <p className="text-gray-600">
            <b>inline</b> The element doesn’t start on a new line and only take
            just the width it requires.we can’t set the width or height. <br />
            <b>inline-block</b>
            It’s just like the inline element, where it doesn’t start on a new
            line. BUT, we can set width and height values.
            <br />
            <b>block</b> The element will start on a new line and take the full
            width available. And we can set width and height values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
