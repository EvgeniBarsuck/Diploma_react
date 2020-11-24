export const getAboutCompany = async () =>{
    const res = await fetch("http://localhost:5000/api/aboutcompany")
                .then(res => res.json())
                .then(res => Array.from(res))
                .catch(err => err);
    return res;
}   