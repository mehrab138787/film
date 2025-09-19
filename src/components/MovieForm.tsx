import React, { useState } from 'react';
import { Plus, Upload, X } from 'lucide-react';
import { FormData } from '../types/Movie';

interface MovieFormProps {
  onSubmit: (data: FormData) => void;
  isOpen: boolean;
  onClose: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ onSubmit, isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    genre: '',
    userName: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string>('');

  const genres = [
    'اکشن', 'درام', 'کمدی', 'علمی-تخیلی', 'ترسناک', 'عاشقانه', 
    'ماجراجویی', 'انیمیشن', 'جنایی', 'مستند', 'فانتزی', 'موزیکال'
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.genre && formData.userName) {
      onSubmit(formData);
      setFormData({ title: '', description: '', genre: '', userName: '', image: null });
      setImagePreview('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900/95 to-purple-900/95 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            اضافه کردن فیلم/سریال
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">پوستر یا صحنه</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-purple-500/50 rounded-xl cursor-pointer hover:border-purple-400/70 transition-all duration-300 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-purple-400 mb-2" />
                    <span className="text-sm text-gray-400">کلیک کنید تا عکس انتخاب کنید</span>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">عنوان</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder="نام فیلم یا سریال"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">توضیحات</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none h-20"
              placeholder="توضیح کوتاه در مورد فیلم/سریال..."
              required
            />
          </div>

          {/* Genre */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">ژانر</label>
            <select
              value={formData.genre}
              onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              required
            >
              <option value="">انتخاب ژانر</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          {/* User Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">نام شما</label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder="نام کاربری شما"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            اضافه کردن
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;