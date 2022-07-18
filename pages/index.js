import { useQuery, gql } from "@apollo/client";
import recommendedProfilesQuery from "../queries/recommendedProfilesQuery";

export default function Home() {
  const {loading, error, data} = useQuery(recommendProfilesQuery);

  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div>
      Hello
      {data.recommendedProfiles.map((profile, index) => {
        console.log(`Profile ${index}:`, profile);
        return (
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
            <div>{profile.attributes.map((attr, idx) => {
              if (attr.key === "website") {
                return <div><a href={`${attr.value}`}>{attr.value}</a><br/></div>
              } else if (attr.key === "twitter") {
                return <div><a href={`https://twitter.com/${attr.value}`}>@{attr.value}</a><br/></div>;
              }
              return(<div>{attr.value}</div>);
            })}</div>
          </div>
        );
      })}
    </div>
  )
}