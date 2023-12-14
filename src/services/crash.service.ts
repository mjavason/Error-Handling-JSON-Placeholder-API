
class CrashService {


  async getAllSymbols() {
    try {
    
      return responseData;
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  }

  async getLatestRates() {
    try {
    
      return responseData;
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  }
}

export const crashService = new CrashService();
