/**
 * API Client - توحيد الوصول إلى Supabase و Gemini
 * يسهّل الانتقال من base44
 */

// استيراد Supabase
export { supabase, db, auth, storage } from './supabaseClient'

// استيراد Gemini
export { gemini, geminiPro, GeminiClient } from './geminiClient'

// استيراد File Service
export { default as fileService } from './fileService'

// Backward compatibility wrapper (لتسهيل الانتقال)
import { db } from './supabaseClient'
import { gemini } from './geminiClient'
import FileService from './fileService'

export const api = {
  // Database entities
  entities: {
    Manuscript: db.manuscripts,
    ComplianceRule: db.complianceRules,
    CoverDesign: db.coverDesigns,
    ProcessingJob: db.processingJobs
  },
  
  // Core integrations
  integrations: {
    Core: {
      // LLM invocation
      InvokeLLM: async ({ prompt, messages, temperature, max_tokens }) => {
        if (prompt) {
          // Simple prompt
          const result = await gemini.generateContent(prompt, { temperature, max_tokens })
          return { output: result }
        } else if (messages) {
          // Multi-turn conversation
          return await gemini.invokeLLM({ messages, temperature, max_tokens })
        }
      },
      
      // File upload
      UploadFile: async ({ file }) => {
        return await FileService.uploadFile(file)
      },
      
      // Extract data from file
      ExtractDataFromUploadedFile: async ({ file_url, file }) => {
        if (file) {
          return await FileService.extractDataFromFile(file)
        }
        throw new Error('File extraction from URL not yet implemented')
      }
    }
  }
}

export default api
