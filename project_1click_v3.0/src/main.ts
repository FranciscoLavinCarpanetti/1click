import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

interface IncentiveCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  details: string[];
  conditions: string;
  color: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">1C</span>
            </div>
            <span class="text-xl font-bold text-gray-800">1CLICK2GO BANK</span>
          </div>
          <nav class="hidden md:flex space-x-6">
            <a href="#objetivo" class="text-gray-600 hover:text-primary-600 transition-colors">Objetivo</a>
            <a href="#incentivos" class="text-gray-600 hover:text-primary-600 transition-colors">Incentivos</a>
            <a href="#consideraciones" class="text-gray-600 hover:text-primary-600 transition-colors">Consideraciones</a>
            <a href="#contacto" class="text-gray-600 hover:text-primary-600 transition-colors">Contacto</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 px-6">
      <div class="container mx-auto text-center max-w-4xl">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            PLAN DE INCENTIVOS
            <span class="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">1CLICK</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Impulsando la captación y fidelización de clientes de alto valor
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              (click)="downloadPDF()"
              class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              📄 Descargar Plan Completo
            </button>
            <button 
              (click)="scrollToSection('objetivo')"
              class="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Objetivo General -->
    <section id="objetivo" class="py-16 px-6 bg-white">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-12 animate-on-scroll" #animateElement>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">OBJETIVO GENERAL</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p class="text-lg text-gray-700 leading-relaxed bg-gray-50 p-8 rounded-2xl shadow-sm">
            Impulsar la captación y fidelización de clientes de alto valor mediante un sistema de incentivos 
            <strong class="text-primary-600">justo, escalable y motivador</strong>, que premia tanto la recomendación 
            como la gestión activa y el compromiso con los resultados.
          </p>
        </div>
      </div>
    </section>

    <!-- Secciones de Incentivos -->
    <section id="incentivos" class="py-16 px-6 bg-gradient-to-br from-gray-50 to-primary-50">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16 animate-on-scroll" #animateElement>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">MODALIDADES DE INCENTIVOS</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro sistema de incentivos está diseñado para diferentes tipos de colaboradores y niveles de compromiso
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div 
            *ngFor="let card of incentiveCards; let i = index"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-on-scroll hover:transform hover:scale-105"
            #animateElement
            [style.animation-delay]="(i * 150) + 'ms'">
            
            <div [class]="'h-2 bg-gradient-to-r ' + card.color"></div>
            
            <div class="p-8">
              <div class="flex items-center mb-6">
                <div [class]="'w-16 h-16 rounded-xl flex items-center justify-center text-2xl mr-4 ' + card.color.replace('from-', 'bg-').split(' ')[0] + ' bg-opacity-10'">
                  {{ card.icon }}
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 uppercase tracking-wide">{{ card.title }}</h3>
                  <p class="text-gray-600 font-medium">{{ card.subtitle }}</p>
                </div>
              </div>

              <div class="space-y-4 mb-6">
                <div *ngFor="let detail of card.details" class="flex items-start">
                  <div class="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p class="text-gray-700" [innerHTML]="detail"></p>
                </div>
              </div>

              <div class="border-t pt-4">
                <p class="text-sm text-gray-600">
                  <strong class="text-gray-800">Condiciones:</strong> {{ card.conditions }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consideraciones Adicionales -->
    <section id="consideraciones" class="py-16 px-6 bg-white">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-12 animate-on-scroll" #animateElement>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">CONSIDERACIONES ADICIONALES</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div class="space-y-4">
          <div 
            *ngFor="let faq of faqs; let i = index"
            class="border border-gray-200 rounded-xl overflow-hidden animate-on-scroll"
            #animateElement
            [style.animation-delay]="(i * 100) + 'ms'">
            
            <button 
              (click)="toggleFAQ(i)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors">
              <span class="text-lg font-semibold text-gray-900">{{ faq.question }}</span>
              <span 
                class="text-2xl transition-transform duration-300"
                [class.rotate-45]="faq.isOpen">+</span>
            </button>
            
            <div 
              *ngIf="faq.isOpen"
              class="px-6 py-5 bg-white border-t animate-fade-in">
              <p class="text-gray-700 leading-relaxed" [innerHTML]="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 px-6 bg-gradient-to-r from-primary-600 to-primary-700">
      <div class="container mx-auto max-w-4xl text-center">
        <div class="animate-on-scroll" #animateElement>
          <h2 class="text-3xl font-bold text-white mb-6">Mantente Informado</h2>
          <p class="text-primary-100 text-lg mb-8">
            Suscríbete para recibir actualizaciones sobre nuestros planes de incentivos
          </p>
          
          <form (ngSubmit)="subscribeNewsletter()" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              [(ngModel)]="email"
              name="email"
              placeholder="Tu email"
              required
              class="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30">
            <button 
              type="submit"
              class="bg-accent-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-600 transition-colors">
              Suscribirse
            </button>
          </form>
          
          <div *ngIf="subscriptionMessage" class="mt-4 p-4 bg-white bg-opacity-20 rounded-xl text-white">
            {{ subscriptionMessage }}
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contacto" class="bg-gray-900 text-white py-12 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">1C</span>
              </div>
              <span class="text-xl font-bold">1CLICK2GO BANK</span>
            </div>
            <p class="text-gray-400 mb-4">
              Transformando la experiencia bancaria digital con soluciones innovadoras y incentivos transparentes.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">📧</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">📱</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">🌐</a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul class="space-y-2">
              <li><a href="#objetivo" class="text-gray-400 hover:text-white transition-colors">Objetivo</a></li>
              <li><a href="#incentivos" class="text-gray-400 hover:text-white transition-colors">Incentivos</a></li>
              <li><a href="#consideraciones" class="text-gray-400 hover:text-white transition-colors">Consideraciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contacto</h4>
            <ul class="space-y-2 text-gray-400">
              <li>📧 incentivos&#64;1click2gobank.com</li>
              <li>📱 +34 900 000 000</li>
              <li>🏢 Madrid, España</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 1CLICK2GO BANK. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
})
export class App implements OnInit, AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  email = '';
  subscriptionMessage = '';

  incentiveCards: IncentiveCard[] = [
    {
      id: 'recomendacion',
      title: 'Recomendación',
      subtitle: 'Afiliados / Prescriptores Puntuales',
      icon: '📢',
      details: [
        '<strong>Incentivo fijo:</strong> 1.000 € por apertura efectiva',
        '<strong>Variable:</strong> 10–20% del fee de apertura',
        '<strong>Escalabilidad:</strong> Bonificaciones a partir de 5 cierres/año',
        '<strong>Beneficios adicionales:</strong> Programas de reconocimiento'
      ],
      conditions: 'Cliente activo ≥ 6 meses, no cartera existente',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'colaborador',
      title: 'Colaborador',
      subtitle: 'Agente Comercial Continuado / Introducer Partner',
      icon: '🤝',
      details: [
        '<strong>Porcentaje:</strong> 20–40% de comisiones de apertura',
        '<strong>Bonificación anual:</strong> Según volumen o calidad',
        '<strong>Soporte:</strong> Materiales de marketing y formación',
        '<strong>Flexibilidad:</strong> Modalidad freelance disponible'
      ],
      conditions: 'Acuerdo marco, cumplimiento KYC/AML',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'vinculado',
      title: 'Vinculado',
      subtitle: 'Gestores Relación – Cuentas / Estructura Interna',
      icon: '🔄',
      details: [
        '<strong>Net Revenue Sharing:</strong> 5–15% anual sobre margen neto + comisiones',
        '<strong>Tramos extra:</strong> Por crecimiento de AUM y NPS',
        '<strong>Desarrollo profesional:</strong> Plan de carrera definido',
        '<strong>Herramientas:</strong> CRM avanzado y dashboard personalizado'
      ],
      conditions: 'Seguimiento mensual, plan de cliente, baja rotación',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'contratado',
      title: 'Contratado',
      subtitle: 'Gestores con Contrato Laboral',
      icon: '📊',
      details: [
        '<strong>Fijo competitivo</strong> + variable por objetivos',
        '<strong>Objetivos:</strong> +3M€ AUM inicial, crecimiento neto ≥2M€/año',
        '<strong>Límites:</strong> Máx. 100 clientes o 20M€ AUM',
        '<strong>Bono anual:</strong> Escalonado por calidad y volumen'
      ],
      conditions: 'Formación continua y cumplimiento normativo',
      color: 'from-orange-500 to-red-500'
    }
  ];

  faqs: FAQ[] = [
    {
      question: '💰 Bonos en Criptomonedas',
      answer: 'Posibilidad de recibir bonos en <strong>stablecoins o BTC/ETH</strong> según preferencias del colaborador y normativa vigente.',
      isOpen: false
    },
    {
      question: '📊 Sistema de Trazabilidad',
      answer: '<strong>CRM obligatorio</strong> para trazabilidad completa de referidos, con dashboards en tiempo real y reportes detallados.',
      isOpen: false
    },
    {
      question: '🔍 Control de Calidad',
      answer: '<strong>Auditoría trimestral</strong> de rendimiento con métricas de satisfacción del cliente y cumplimiento de objetivos.',
      isOpen: false
    },
    {
      question: '🎯 Bonificaciones Especiales',
      answer: 'Incentivos extraordinarios por <strong>tramos altos</strong>: >10M€ AUM o >200 referidos con bonos adicionales del 25-50%.',
      isOpen: false
    },
    {
      question: '📈 Escalabilidad del Sistema',
      answer: 'Sistema diseñado para crecer con volúmenes altos, con <strong>automatización</strong> de procesos y cálculos de incentivos.',
      isOpen: false
    }
  ];

  ngOnInit() {
    // Initialize any component data
  }

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.animateElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleFAQ(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  downloadPDF() {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjQgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL091dGxpbmVzIDIgMCBSCi9QYWdlcyAzIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKL1R5cGUgL091dGxpbmVzCi9Db3VudCAwCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzQgMCBSXQo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA5IDAgUgo+Pgo+PgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSA4IFRmCihQbGFuIGRlIEluY2VudGl2b3MgMUNMSUNLKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCgo5IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovTmFtZSAvRjEKL0Jhc2VGb250IC9IZWx2ZXRpY2EKL0VuY29kaW5nIC9NYWNSb21hbkVuY29kaW5nCj4+CmVuZG9iagoKeHJlZgowIDEwCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDc0IDAwMDAwIG4gCjAwMDAwMDAxMjAgMDAwMDAgbiAKMDAwMDAwMDE3NyAwMDAwMCBuIAowMDAwMDAwMzY0IDAwMDAwIG4gCjAwMDAwMDA0NTggMDAwMDAgbiAKMDAwMDAwMDAwMCAwMDAwMCBuIAowMDAwMDAwMDAwIDAwMDAwIG4gCjAwMDAwMDA1NjUgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSAxMAovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNjY1CiUlRU9G';
    link.download = 'Plan_Incentivos_1CLICK.pdf';
    link.click();
    
    // Show success message
    alert('¡Descarga iniciada! El Plan de Incentivos 1CLICK se está descargando.');
  }

  subscribeNewsletter() {
    if (this.email) {
      // Simulate newsletter subscription
      this.subscriptionMessage = '¡Gracias por suscribirte! Recibirás nuestras actualizaciones.';
      this.email = '';
      setTimeout(() => {
        this.subscriptionMessage = '';
      }, 3000);
    }
  }
}

bootstrapApplication(App);