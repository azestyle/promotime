import axios from 'axios';

const BOT_TOKEN = "8969884310:AAGDFr5hO1PWGb1m3VN3OLq_LFT_D4jIllc";
const CHAT_ID = "-1003727772941";

export const telegramService = {
    create: async (formData) => {
        
        const message = `
📦 <b>Yeni Sifariş Gəldi!</b>

👤 <b>Ad, Soyad:</b> ${formData.firstName} ${formData.lastName}
📧 <b>E-poçt:</b> ${formData.email}
📞 <b>Telefon:</b> ${formData.phone}

🛍 <b>Məhsulun növü:</b> ${formData.productType}
📄 <b>Çap materialları:</b> ${formData.printMaterials}
🔢 <b>Miqdarı:</b> ${formData.quantity}

💬 <b>Əlavə qeydlər:</b> ${formData.notes || "Qeyd yazılmayıb"}
        `;

        const textUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        await axios.post(textUrl, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML',
        });

        // Fayllar varsa göndəririk
        if (formData.files && formData.files.length > 0) {
            const fileUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;

            for (const file of formData.files) {
                const data = new FormData();
                data.append('chat_id', CHAT_ID);
                data.append('document', file);

                await axios.post(fileUrl, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
        }

        return true;
    }
};