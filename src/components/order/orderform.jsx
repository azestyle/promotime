import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTelegramCreate } from '../../assets/handle/hook';
import Swal from 'sweetalert2';
import { useTranslation } from "react-i18next";

export default function OrderForm() {
const{t}=useTranslation();
const { mutate: createOrder, isPending } = useTelegramCreate({
    onMutate: () => {
      Swal.fire({
        title: t('form.loadingTitle'),
        text: t('form.loadingText'),
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: t('form.successTitle'),
        text: t('form.successText'),
        confirmButtonText: 'ok',
        confirmButtonColor: '#3085d6',
      });
      reset();
      setSelectedFiles([]);
    },
    onError: (error) => {
      console.error("Xəta:", error);
      Swal.fire({
        icon: 'error',
        title: t('form.errorTitle'),
        text: t('form.errorText'),
        confirmButtonText: 'ok',
      });
    }
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);

  // Faylları seçdikcə üst-üstə yığan və maksimum 3 limitini yoxlayan funksiya
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    
    setSelectedFiles((prevFiles) => {
      const combinedFiles = [...prevFiles, ...newFiles];
      if (combinedFiles.length > 3) {
        alert(t('form.maxFileAlert'));
        return prevFiles;
      }
      return combinedFiles;
    });
  };

  // Seçilmiş tək bir faylı siyahıdan silmək üçün
  const removeFile = (indexToRemove) => {
    setSelectedFiles(selectedFiles.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = (data) => {
    const formData = { ...data, files: selectedFiles };
    createOrder(formData);
    reset();
    setSelectedFiles([]);
  };

  return (
    <div className="order-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        
        
        <h2>{t('form.titlePersonal')}</h2>
        
        <div className="form-group">
          <label>{t('form.fullNameLabel')}<span>*</span></label>
          <div className="row-inputs">
            <div className="input-box">
              <input
                type="text"
                placeholder={t('form.firstNamePlaceholder')}
                {...register("firstName", { required: t('form.firstNameRequired') })}
              />
              {errors.firstName && <span className="error-text">{errors.firstName.message}</span>}
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder={t('form.lastNamePlaceholder')}
                {...register("lastName", { required: t('form.lastNameRequired') })}
              />
              {errors.lastName && <span className="error-text">{errors.lastName.message}</span>}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>{t('form.emailLabel')}<span>*</span></label>
          <input
            type="email"
            placeholder={t('form.emailPlaceholder')}
            {...register("email", { 
              required: t('form.emailRequired'),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t('form.emailInvalid')
              }
            })}
          />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>{t('form.phoneLabel')}<span>*</span></label>
          <div className="phone-input-box">
            <input
              type="tel"
              placeholder="050 123 45 67"
              {...register("phone", { required: t('form.phoneRequired') })}
            />
          </div>
          {errors.phone && <span className="error-text">{errors.phone.message}</span>}
        </div>

       
        <h2>{t('form.titleOrder')}</h2>

        <div className="form-group">
          <label>{t('form.productTypeLabel')}<span>*</span></label>
          <input
            type="text"
            placeholder={t('form.productTypePlaceholder')}
            {...register("productType", { required: t('form.productTypeRequired') })}
          />
          {errors.productType && <span className="error-text">{errors.productType.message}</span>}
        </div>

        <div className="form-group">
          <label>{t('form.printMaterialsLabel')}<span>*</span></label>
          <input
            type="text"
            placeholder={t('form.printMaterialsPlaceholder')}
            {...register("printMaterials", { required:t('form.printMaterialsRequired') })}
          />
          {errors.printMaterials && <span className="error-text">{errors.printMaterials.message}</span>}
        </div>

        <div className="form-group">
          <label>{t('form.quantityLabel')}<span>*</span></label>
          <input
            type="number"
            placeholder={t('form.quantityPlaceholder')}
            {...register("quantity", { required: t('form.quantityRequired') })}
          />
          {errors.quantity && <span className="error-text">{errors.quantity.message}</span>}
        </div>

        
        <div className="form-group">
          <label>{t('form.uploadLabel')}</label>
          
          <label className="file-drop-zone">
            <div className="file-icon">📁</div>
            <p>{t('form.uploadText')}</p>
            <span>{t('form.uploadLimit')}</span>
            <input 
              type="file" 
              multiple 
              onChange={handleFileChange} 
            />
          </label>
          <span className="file-hint">{t('form.uploadHint')}</span>

          {selectedFiles.length > 0 && (
            <div className="selected-files-list">
              <p>{t('form.selectedFiles')}:</p>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>
                    <span>{file.name}</span>
                    <button type="button" onClick={() => removeFile(index)}>✕</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>{t('form.notesLabel')}</label>
          <textarea
            rows="4"
            placeholder={t('form.notesPlaceholder')}
            {...register("notes")}
          />
        </div>

        <p className="privacy-text">
          {t('form.privacyText')}
        </p>

        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? t('form.submittingBtn') :t('form.submitBtn')}
        </button>

      </form>
    </div>
  );
}