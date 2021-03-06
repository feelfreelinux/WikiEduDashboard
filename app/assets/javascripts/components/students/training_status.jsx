import React from 'react';

const TrainingStatus = React.createClass({
  displayName: 'TrainingStatus',

  propTypes: {
    trainingModules: React.PropTypes.array
  },

  render() {
    if (!this.props.trainingModules.length) {
      return <div></div>;
    }
    const moduleRows = this.props.trainingModules.map((trainingModule) => {
      let moduleStatus;
      if (trainingModule.completion_date) {
        moduleStatus = (
          <span className="completed">
            Completed at {moment(trainingModule.completion_date).format('YYYY-MM-DD   h:mm A')}
          </span>
        );
      } else {
        moduleStatus = (
          <span className="overdue">
            {trainingModule.status}
          </span>
        );
      }
      return (
        <tr className="student-training-module" key={trainingModule.id}>
          <td>{trainingModule.module_name}</td>
          <td>{moduleStatus}</td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th>{I18n.t('users.training_module_name')}</th>
            <th>{I18n.t('users.training_module_status')}</th>
          </tr>
        </thead>
        <tbody>
          {moduleRows}
        </tbody>
      </table>
    );
  }
});

export default TrainingStatus;
