const [image, setImage] = useState(null)
let SelectHandler = (e) => {

    setImage(e.target.files[0])
}
let UploadImage = () => {
    if (image) {
        let form = new FormData()
        form.append('image', image)
        fetch('http://localhost:4000/api/perfumes/upload', {
            method: "POST",
            body: form, headers: {
                // 'Content-Type': 'multipart/form-data',
                additionalData: JSON.stringify({ price: '1300', name: "oud" })
            }

        }).then(res => res.json()).then(data => { console.log(data); })
    }

}
//<input type='file' onChange={SelectHandler} />
//  <button onClick={UploadImage}>SEND to backend</button>