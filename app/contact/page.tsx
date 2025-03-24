import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">연락하기</h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* 연락처 정보 */}
          <div className="md:w-1/3 bg-gradient-to-b from-blue-500 to-violet-600 text-white p-8">
            <h2 className="text-2xl font-semibold mb-6">연락처 정보</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FiMail className="mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-medium">이메일</h3>
                  <p className="text-blue-100">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-medium">전화번호</h3>
                  <p className="text-blue-100">010-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-medium">주소</h3>
                  <p className="text-blue-100">서울특별시 강남구</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-medium mb-4">소셜 미디어</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.073 10.4c0-.867-.249-1.511-.746-1.933-.498-.422-1.152-.633-1.964-.633H2v8.618h3.099c.896 0 1.631-.223 2.205-.669.574-.446.86-1.195.86-2.246 0-.584-.14-1.084-.42-1.498a2.508 2.508 0 0 0-1.133-.83c.396-.184.701-.479.914-.885.213-.406.32-.872.32-1.399l.228.475zm-3.82-1.031h1.689c.44 0 .79.107 1.052.321.262.215.393.558.393 1.031 0 .482-.144.84-.433 1.076-.288.235-.695.353-1.22.353h-1.48V9.368l-.001.001zm3.113 5.251c-.329.277-.782.415-1.36.415h-1.753v-3.291h1.743c.603 0 1.07.131 1.399.392.329.262.493.686.493 1.272 0 .586-.173 1.034-.502 1.311l-.02-.099zM15.761 7.9c-.7 0-1.34.129-1.922.387a4.665 4.665 0 0 0-1.471 1.054 4.838 4.838 0 0 0-.934 1.559 5.156 5.156 0 0 0-.334 1.874c0 .682.111 1.308.334 1.874.222.566.54 1.08.954 1.544.414.464.92.812 1.52 1.044.6.232 1.26.348 1.983.348.971 0 1.784-.209 2.44-.628a4.383 4.383 0 0 0 1.6-1.825l-1.381-.62c-.305.51-.688.901-1.15 1.175-.462.275-1.044.412-1.743.412a3.11 3.11 0 0 1-1.232-.235 2.818 2.818 0 0 1-.944-.649 2.852 2.852 0 0 1-.608-.954 3.336 3.336 0 0 1-.226-1.171h6.582c.023-.22.035-.429.035-.628 0-.66-.104-1.282-.313-1.864a4.692 4.692 0 0 0-.904-1.544 4.25 4.25 0 0 0-1.41-1.034 4.49 4.49 0 0 0-1.806-.373zm-3.13 3.132c.07-.397.187-.755.351-1.076.164-.32.364-.595.598-.82a2.69 2.69 0 0 1 1.893-.776c.34 0 .655.065.944.196.29.131.545.306.766.526.221.22.4.476.54.767.139.291.227.599.266.925H12.63v.258zM21.293 6.6h-3.385V5.33h3.385V6.6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* 연락 폼 */}
          <div className="md:w-2/3 p-8">
            <h2 className="text-2xl font-semibold mb-6">메시지 보내기</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="제목을 입력하세요"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">메시지</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="메시지를 입력하세요"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
              >
                보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 