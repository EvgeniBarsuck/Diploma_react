export const getAboutCompany = async () =>{
    return  await fetch("http://localhost:5000/api/aboutcompany")
                .then(res => res.json())
                .then(res => this.setState({aboutCompany : Array.from(res)}))
                .catch(err => err);
}   