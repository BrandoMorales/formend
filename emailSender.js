export async function sendFormData(formData) {
    const SERVICE_ID = 'form_sena'
    const TEMPLATE_ID = 'template_iphwm1p'


    const templateParams = {
        name: formData.get("nombre"),
        email: formData.get("email"),
        age: formData.get("quantity"),
        car: formData.get("marca"),
        transporte: formData.get("transporte"),
        comments: formData.get("comentarios"),
    };

    return  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
}