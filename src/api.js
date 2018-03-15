import axios from 'axios';

export const topCampersRecent = () => {
  return axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
              .then(resp => resp.data);
};


export const topCampersAllTime = () => {
    return axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`)
                .then(resp => resp.data);
  };
