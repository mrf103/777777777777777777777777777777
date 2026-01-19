# 📚 منصة سيادي للنشر - Seyadi Publishing Platform

<div align="center">

![Version](https://img.shields.io/badge/version-3.0--professional-blue)
![Status](https://img.shields.io/badge/status-production--ready-success)
![License](https://img.shields.io/badge/license-MIT-green)
![Tech](https://img.shields.io/badge/tech-React%20%7C%20Supabase%20%7C%20Gemini-blueviolet)

**منصة احترافية متكاملة لتحرير ونشر المخطوطات بمعايير دور النشر العالمية**

[🚀 Demo](#) | [📖 Documentation](./SYSTEM_LOGIC_ANALYSIS.md) | [🔧 Installation](#-التثبيت-والإعداد) | [🎯 Features](#-المميزات-الجديدة-v30)

</div>

---

## 🎉 ما الجديد في v3.0 Professional

### ✅ نظام الوكلاء المتخصصين (Specialized Agents System)
```
🤖 5 وكلاء AI متخصصون:
├─ 🔍 محلل البنية: كشف أرقام الصفحات، الفهارس، علامات الفصول
├─ 🧹 محرر لغوي: تنظيف دقيق بدون تشويه اللغة
├─ ✅ مراقب الجودة: فحص شامل للتناسق والجودة
├─ 💡 مولد التكملات: تعويض ذكي للنص المحذوف
└─ 📖 مقسم الفصول: تقسيم احترافي 2-13 فصل
```

### ✅ التحقق الصارم من سلامة اللغة (Language Validator)
- 🔤 كشف تشويه الأحرف العربية (Mojibake Detection)
- 🛡️ التحقق من UTF-8 encoding
- 📊 تحليل التناسق اللغوي (70-100%)
- 🔄 مقارنة قبل/بعد المعالجة
- 💯 درجة سلامة لغوية (Language Integrity Score)

### ✅ نظام تعويض النص المحذوف (Content Compensator)
- 🎯 كشف تلقائي للنقص (>10%)
- 🔄 توليد محتوى متناسق مع السياق
- ⚖️ التزام صارم بنسبة ±40% المسموحة
- 🔁 إعادة محاولة ذكية (max 3 attempts)
- 📈 تحليل دلتا الكلمات والتحقق

---

## 📋 معايير دور النشر المطبقة

### ✅ قبول الملفات
```
✓ أنواع: TXT, HTML, DOCX فقط
✓ حجم: حتى 7 MB
✓ كلمات: حتى 200,000 كلمة
✓ لغات: عربي، إنجليزي، ألماني
```

### ✅ معايير الجودة
```
✓ التناسق اللغوي: ≥85%
✓ الوحدة الموضوعية: ≥75%
✓ نسبة التكرار: <15%
✓ سلامة اللغة: 100% (لا تشويه)
✓ عدد الفصول: 2-13
✓ نسبة التغيير: ±40%
```

### ✅ عمليات المعالجة
1. **تحليل بنيوي عميق** - كشف جميع العناصر الهيكلية
2. **إزالة العناصر القديمة** - صفحات، فهارس، ترقيم
3. **تنظيف لغوي دقيق** - بدون تشويه
4. **كشف المحتوى غير ذي الصلة** - محادثات، أكواد
5. **إزالة التكرار** - فقرات وجمل مكررة
6. **تقسيم ذكي للفصول** - 2-13 فصل
7. **تعويض النص** - إذا حُذف أكثر من 10%
8. **تحقق نهائي** - معايير الجودة والنشر

---

## 🏗️ البنية التقنية

```
📦 Seyadi Platform v3.0
├── 🎨 Frontend
│   ├── React 18.3.1
│   ├── Vite 5.4.21
│   ├── TanStack Query 5.28
│   ├── Tailwind CSS
│   └── 51 Shadcn Components
│
├── 🔌 Backend (Serverless)
│   ├── Supabase (PostgreSQL)
│   ├── Supabase Auth (JWT)
│   ├── Supabase Storage
│   └── Google Gemini AI
│
├── 🧠 AI & NLP
│   ├── 5 Specialized Agents
│   ├── LanguageValidator
│   ├── ContentCompensator
│   ├── Local NLP (5 modules)
│   └── ChunkProcessor
│
└── 🛠️ Utilities
    ├── Cache Manager
    ├── Web Workers
    ├── Progress Tracker
    └── Publishing Standards
```

---

## 🚀 التثبيت والإعداد

### 1. المتطلبات
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### 2. التثبيت
```bash
# Clone the repository
git clone https://github.com/mrf103/777777777777777777777777777777.git
cd 777777777777777777777777777777

# Install dependencies
npm install

# Copy environment variables
cp .env.railway .env
```

### 3. إعداد المتغيرات البيئية

أنشئ مشروع [Supabase](https://supabase.com) و [Google AI](https://makersuite.google.com):

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Gemini AI
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key

# Application
NODE_ENV=development
PORT=3000
```

### 4. إنشاء قاعدة البيانات

نفذ SQL التالي في Supabase SQL Editor:

```sql
-- manuscripts table
CREATE TABLE manuscripts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  author TEXT,
  content TEXT,
  chapters JSONB,
  word_count INTEGER,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- compliance_rules table
CREATE TABLE compliance_rules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  rule_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- cover_designs table
CREATE TABLE cover_designs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  manuscript_id UUID REFERENCES manuscripts(id),
  image_url TEXT,
  prompt TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- processing_jobs table
CREATE TABLE processing_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  manuscript_id UUID REFERENCES manuscripts(id),
  status TEXT DEFAULT 'pending',
  progress INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 5. التشغيل

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

---

## 💻 الاستخدام

### مثال كامل

```javascript
import { analyzeAndCleanText } from '@/Components/upload/TextAnalyzerEnhanced';
import { validateLanguageIntegrity } from '@/utils/LanguageValidator';
import { compensateDeletedContent } from '@/utils/ContentCompensator';

// 1. قراءة الملف
const file = document.querySelector('input[type="file"]').files[0];
const text = await file.text();

// 2. تحليل وتنظيف
const result = await analyzeAndCleanText(text, 'ar', {
  start: (name) => console.log(`بدأ: ${name}`),
  progress: (name, data) => console.log(`${name}: ${JSON.stringify(data)}`),
  complete: (name) => console.log(`اكتمل: ${name}`)
});

// 3. النتائج
console.log('النص النظيف:', result.cleaned_text);
console.log('الكلمات:', result.statistics.final_word_count);
console.log('الفصول:', result.chapters.length);
console.log('الجودة:', result.quality.repetition_rate);
console.log('التوصيات:', result.recommendations);
```

### استخدام الوكلاء

```javascript
import { agentCoordinator } from '@/utils/SpecializedAgents';

// معالجة بالوكلاء
const results = await agentCoordinator.processWithAgents(text, {
  language: 'ar',
  divideChapters: true,
  compensate: true,
  originalWordCount: 50000
});

console.log('المراحل:', results.stages);
console.log('النص النهائي:', results.finalText);
console.log('Metadata:', results.metadata);
```

---

## 📊 الأداء

| العملية | الطريقة القديمة | الطريقة الجديدة | التحسين |
|---------|-----------------|-----------------|---------|
| استخراج الفصول | 10s (LLM) | 0.1s (Local) | **100x** |
| كشف الصفحات | 5s (LLM) | 0.05s (Regex) | **100x** |
| كشف التكرار | 8s (LLM) | 0.2s (Hash) | **40x** |
| تصنيف المحتوى | 5s (LLM) | 0.1s (Keywords) | **50x** |
| **إجمالي LLM** | **100%** | **30-40%** | **-60-70%** |

---

## 🧪 الاختبارات

```bash
# All tests
npm test

# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# Production tests
npm run test:production

# With coverage
npm run test:coverage
```

---

## 🚂 النشر على Railway

### الطريقة السريعة

```bash
# 1. ربط المشروع بـ Railway
railway login
railway link

# 2. إضافة المتغيرات البيئية
# انسخ من .env.railway إلى Railway Dashboard

# 3. النشر
git push origin main  # Auto-deploy enabled
```

### الطريقة المحلية

```bash
# Deploy from CLI
railway up
```

راجع [دليل النشر الكامل](./RAILWAY_DEPLOYMENT.md)

---

## 📚 التوثيق

- [📖 دليل النظام الكامل](./SYSTEM_LOGIC_ANALYSIS.md) - تحليل مفصل للمنطق والمعايير
- [🚀 دليل النشر على Railway](./RAILWAY_DEPLOYMENT.md)
- [✅ قائمة التحقق للإنتاج](./PRODUCTION_CHECKLIST.md)
- [🔄 دليل Migration](./MIGRATION_TO_SUPABASE.md)
- [💡 أمثلة الاستخدام](./USAGE_EXAMPLES.js)

---

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات:

1. Fork المشروع
2. أنشئ branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى Branch (`git push origin feature/amazing-feature`)
5. افتح Pull Request

---

## 📜 الترخيص

هذا المشروع مرخص تحت MIT License - راجع [LICENSE](LICENSE) للتفاصيل.

---

## 👨‍💻 المطور

**Firas** - [@mrf103](https://github.com/mrf103)

---

## 🙏 شكر وتقدير

- [Supabase](https://supabase.com) - Backend as a Service
- [Google Gemini](https://ai.google.dev) - AI و LLM
- [Railway](https://railway.app) - Deployment Platform
- [Shadcn UI](https://ui.shadcn.com) - UI Components
- [TanStack Query](https://tanstack.com/query) - Data Fetching

---

<div align="center">

**صُنع بـ ❤️ في السعودية**

[⬆ العودة للأعلى](#-منصة-سيادي-للنشر---seyadi-publishing-platform)

</div>
