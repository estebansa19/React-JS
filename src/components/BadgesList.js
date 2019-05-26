import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <div
              className="container shadow-sm bg-white m-3 p-3 rounded"
              key={badge.id}
            >
              <div className="row">
                <div className="col-2">
                  <div>
                    <img
                      src={badge.avatarUrl}
                      alt="Badge avatar"
                      className="rounded-circle"
                    />
                  </div>
                </div>

                <div className="col-10">
                  <span className="font-weight-bold">
                    {badge.firstName} {badge.lastName}
                  </span>
                  <br />

                  <a className="text-info" href="/">
                    <i className="fa fa-twitter" /> @{badge.twitter}
                  </a>
                  <br />

                  <span>{badge.jobTitle}</span>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
