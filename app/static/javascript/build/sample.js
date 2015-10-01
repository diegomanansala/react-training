var React = require('react');

module.exports = React.createClass({displayName: "exports",
    render: function() {
        return (React.createElement("h1", null, "This is a greeting from an external jsx file!"))
    }
});