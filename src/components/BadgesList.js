import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "../components/Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <Link
              className="text-reset text-decoration-none"
              key={badge.id}
              to={`/badges/${badge.id}`}
            >
              <div className="container shadow-sm bg-white m-3 p-3 rounded">
                <div className="row">
                  <div className="col-2">
                    <div>
                      <Gravatar email={badge.email} />
                    </div>
                  </div>

                  <div className="col-10">
                    <span className="font-weight-bold">
                      {badge.firstName} {badge.lastName}
                    </span>
                    <br />

                    <a className="text-info" href="/">
                      <i className="fa fa-twitter" /> {badge.twitter}
                    </a>
                    <br />

                    <span>{badge.jobTitle}</span>
                    <br />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
